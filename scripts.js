var theme_switch = document.getElementById("switchCheckDefault");

var background_elements = [".accordion-body", ".accordion-button", ".card-body"]
var text_elements = ["h1", "h2", "h5", "span", "p"]

function change_theme()
{
    if (localStorage.getItem("themeOption")) {
        if (localStorage.getItem("themeOption") == 'dark') {
            document.body.style.backgroundColor = '#000000';
            document.querySelectorAll(".btn-primary").forEach(selected_element => selected_element.style.backgroundColor = '#000000')
            document.querySelectorAll(".alert-primary").forEach(selected_element => selected_element.style.backgroundColor = '#000000')
            background_elements.forEach(element => {
                document.querySelectorAll(element).forEach(selected_element => selected_element.style.backgroundColor = '#000000');
            })
            text_elements.forEach(element => {
                document.querySelectorAll(element).forEach(selected_element => selected_element.style.color = "#FFFFFF")
            })
            theme_switch.checked = true
        }
        else {
            document.body.style.backgroundColor = '#FFFFFF'
            document.querySelectorAll(".btn-primary").forEach(selected_element => selected_element.style.backgroundColor = '')
            document.querySelectorAll(".alert-primary").forEach(selected_element => selected_element.style.backgroundColor = '')
            background_elements.forEach(element => {
                document.querySelectorAll(element).forEach(selected_element => selected_element.style.backgroundColor = '#FFFFFF');
            })
            text_elements.forEach(element => {
                document.querySelectorAll(element).forEach(selected_element => selected_element.style.color = "#000000")
            })
            theme_switch.checked = false
        } 
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    change_theme()
})


theme_switch.addEventListener('change', function() {
    theme_switch.checked ? localStorage.setItem("themeOption", "dark") : localStorage.setItem("themeOption", "white");
    change_theme();
    console.log(localStorage.getItem("themeOption"))
})