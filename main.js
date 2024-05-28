'use strict'

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Mails',
            mails: []
        };
    },
    created() {
        console.log('chiamata axios');
        const requests = [];
        
        // creo 5 richieste
        for (let i = 0; i < 5; i++) {
            requests.push(
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            );
        }

        // attendo tutte le richieste completate
        Promise.all(requests)
            .then(responses => {
                responses.forEach(response => {
                    this.mails.push(response.data.response);
                });
            })
    }
}).mount('#app');

