import axios from 'axios';

export async function SendDiscordWebhook(message: string, userAgent: string) {
    console.log("entered");
    let formated_msg = ""
    if (message == "undefined"){
        formated_msg = "redirect page reached:\nhttps://nightly.dragonforgenexus.xyz/dfm\n\nUserAgent:\n" + userAgent;
    } else {
        formated_msg = "redirect page reached:\nhttps://nightly.dragonforgenexus.xyz/dfm" + message + "\n\nUserAgent:\n" + userAgent;
    }
    try {
        const webhookURL = String(process.env.DISCORD_REDIRECT);
        const payload = {
            content: formated_msg
        };

        const response = await axios.post(webhookURL, payload);

        if (response.status !== 200 && response.status !== 204) {
            throw new Error(`Failed to send message: ${response.status} ${response.statusText}`);
        }

        console.log('Message sent to Discord webhook successfully!');
    } catch (error) {
        console.error('Error sending message to Discord webhook:', error);
    }
}
