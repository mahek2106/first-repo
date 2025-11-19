import { getSelectedCountry } from "./countryModule.js";
import { showCountryAlert } from "./uiModule.js";

$(document).ready(function () {
    $("#countryDropdown").change(function () {
        const selected = $(this).val();
        const country = getSelectedCountry(selected);

        if (country) {
            showCountryAlert(country);
        }
    });
});
