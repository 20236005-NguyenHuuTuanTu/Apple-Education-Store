import { GrowthBook } from "https://esm.sh/@growthbook/growthbook";
import { autoAttributesPlugin } from "https://esm.sh/@growthbook/growthbook/plugins";
const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-wyaTTu6sKMLRkOL",
  enableDevMode: true,
  plugins: [autoAttributesPlugin()],
  trackingCallback: (experiment, result) => {
    console.log("Experiment Viewed", {
      experiment: experiment.key,
      variation: result.key
    });
  }
});

await growthbook.init({ streaming: true });

console.log("Features loaded");
if (growthbook.isOn("uiux")) {
    document.getElementById("ht").innerText = "New Banner 🎉";
}
else{
    document.getElementById("ht").innerText = "hello";
}
