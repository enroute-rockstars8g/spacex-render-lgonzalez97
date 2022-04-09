export const getCapsules = async () => {
    try {
        const response = await fetch(`https://api.spacex.land/rest/capsules`)

        if (response.status !== 200) return;

        const capsule = await response.json();


        return capsule;
    } catch (e) {
        console.error(e)
    }
}