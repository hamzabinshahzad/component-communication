
const bus = {
    sender(val) {
        console.log("sender");
        let event = new Event("charTriggered");
        document.dispatchEvent(event, { detail: "123"})
    },

    receiver() {
        document.addEventListener("charTriggered", (e) => {
            console.log("Hit!");
        });
    }
}

export default bus;