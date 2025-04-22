const baseURL = location.href + "api"

async function getCats() {
    try {
        const catResp = await fetch(`${baseURL}/cats/color/black`);
        const catData = await catResp.json();
        console.log(catData);
    } catch (e) {
        console.log(e);
    }
}

getCats();