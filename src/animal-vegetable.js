
import quotes from './quotes';

class Animal
{

    static say(min=1, max=4) {
        const filtered = quotes.filter(q => {
            return q.offensiveness <= max && q.offensiveness >= min;
        });
        return filtered[Math.floor(Math.random()*filtered.length)]
    }
}

export { Animal };
