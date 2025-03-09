async function fetchDataOnLoad() {
    try {
        await ZOHO.CREATOR.init();
        console.log('initiated')
    } catch (error) {
        console.error("Error:", error);
    }
}
document.addEventListener('DOMContentLoaded', fetchDataOnLoad);