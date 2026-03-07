document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.querySelector('.next-to-payment');

    const showError = (inputId, message) => {
        const inputElement = document.getElementById(inputId);
        const container = inputElement.closest('.input-container') || inputElement.closest('.inner-input-container');
        container.classList.add('error');
        const errorText = container.querySelector('.error-message');
        if (errorText) errorText.innerText = message;
    };

    const clearError = (inputId) => {
        const inputElement = document.getElementById(inputId);
        const container = inputElement.closest('.input-container') || inputElement.closest('.inner-input-container');
        container.classList.remove('error');
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone) => /^(0[3|5|7|8|9])+([0-9]{8})$/.test(phone);

    document.getElementById('email').addEventListener('blur', function (e) {
        const val = e.target.value.trim();
        if (val !== '' && !isValidEmail(val)) {
            showError('email', 'Vui lòng nhập địa chỉ email hợp lệ');
        } else {
            clearError('email');
        }
    });

    document.getElementById('phone').addEventListener('blur', function (e) {
        const val = e.target.value.trim();
        if (val !== '' && !isValidPhone(val)) {
            showError('phone', 'Vui lòng nhập số điện thoại hợp lệ');
        } else {
            clearError('phone');
        }
    });

    document.getElementById('optional-email').addEventListener('blur', function (e) {
        const val = e.target.value.trim();
        if (val !== '' && !isValidEmail(val)) {
            showError('optional-email', 'Vui lòng nhập địa chỉ email phụ hợp lệ');
        } else {
            clearError('optional-email');
        }
    });

    nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let isValid = true;

        const requiredFields = [
            { id: 'first-name', msg: 'Vui lòng nhập tên' },
            { id: 'last-name', msg: 'Vui lòng nhập họ' },
            { id: 'address', msg: 'Vui lòng nhập địa chỉ' },
            { id: 'district', msg: 'Vui lòng chọn quận/huyện', isSelect: true },
            { id: 'ward', msg: 'Vui lòng chọn phường/xã', isSelect: true }
        ];

        requiredFields.forEach(field => {
            const input = document.getElementById(field.id);
            if (field.isSelect) {
                if (input.value === 'default') {
                    showError(field.id, field.msg);
                    isValid = false;
                }
            } else {
                if (input.value.trim() === '') {
                    showError(field.id, field.msg);
                    isValid = false;
                }
            }
        });

        const emailVal = document.getElementById('email').value.trim();
        if (emailVal === '' || !isValidEmail(emailVal)) {
            showError('email', emailVal === '' ? 'Vui lòng nhập email' : 'Vui lòng nhập địa chỉ email hợp lệ');
            isValid = false;
        }

        const phoneVal = document.getElementById('phone').value.trim();
        if (phoneVal === '' || !isValidPhone(phoneVal)) {
            showError('phone', phoneVal === '' ? 'Vui lòng nhập số điện thoại' : 'Vui lòng nhập số điện thoại hợp lệ');
            isValid = false;
        }

        if (!isValid) {
            const firstError = document.querySelector('.error');
            if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    const allInputs = document.querySelectorAll('input, select');
    allInputs.forEach(input => {
        input.addEventListener('input', function() {
            clearError(this.id);
        });
    });

    const addOptionalEmailBtn = document.querySelector(".add-optional-email");
            const optionalEmailInputContainer = document.querySelector(".payment-footer-top .input-container");

            addOptionalEmailBtn.addEventListener("click", function () {
                optionalEmailInputContainer.hidden = false;
                addOptionalEmailBtn.style.display = "none";
            });
});