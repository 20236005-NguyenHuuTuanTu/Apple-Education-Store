import { GrowthBook } from "https://esm.sh/@growthbook/growthbook";
const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-wyaTTu6sKMLRkOL",
  enableDevMode: true,
});

await growthbook.init({ streaming: true });

console.log("Features loaded");
if (growthbook.isOn("uiux")) {
    document.getElementById("ht").innerText = "New Banner 🎉";
}
else{
    document.getElementById("ht").innerText = "Hỗ trợ";
}
