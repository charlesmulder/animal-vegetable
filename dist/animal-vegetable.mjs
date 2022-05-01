var quotes = [
    {
        "quote": "For as long as men massacre animals, they will kill each other.",
        "author": "Pythagoras",
        "offensiveness": 2
    },
    {
        "quote": "The greatness of a nation and its moral progress can be judged by the way its animals are treated.",
        "author": "Mohandas K. Gandhi",
        "offensiveness": 1
    },
    {
        "quote": "I am in favor of animal rights as well as human rights. That is the way of a whole human being.",
        "author": "Abraham Lincoln",
        "offensiveness": 1
    },
    {
        "quote": "Poor animals, how jealously they guard their bodies, for to us is merely an evening’s meal, but to them is life itself.",
        "author": "T. Casey Brennan",
        "offensiveness": 1
    },
    {
        "quote": "Humanity's true moral test, its fundamental test...consists of its attitude towards those who are at its mercy: animals.",
        "author": "Milan Kundera",
        "offensiveness": 1
    },
    {
        "quote": "To be a vegetarian is to disagree - to disagree with the course of things today... starvation, cruelty - we must make a statement against these things. Vegetarianism is my statement. And I think it's a strong one.",
        "author": "Isaac Bashevis Singer",
        "offensiveness": 1
    },
    {
        "quote": "To protest about bullfighting in Spain, the eating of dogs in South Korea, or the slaughter of baby seals in Canada while continuing to eat eggs from hens who have spent their lives crammed into cages, or veal from calves who have been deprived of their mothers, their proper diet, and the freedom to lie down with their legs extended, is like denouncing apartheid in South Africa while asking your neighbors not to sell their houses to blacks.",
        "author": "Peter Singer",
        "offensiveness": 2
    },
    {
        "quote": "We need, in a special way, to work twice as hard to help people understand that the animals are fellow creatures, that we must protect them and love them as we love ourselves.",
        "author": "Cesar Chavez",
        "offensiveness": 1
    },
    {
        "quote": "The time will come when men such as I will look upon the murder of animals as they now look upon the murder of men.",
        "author": "Leonardo Da Vinci",
        "offensiveness": 1
    },
    {
        "quote": "The animals of the world exist for their own reasons. They were not made for humans any more than black people were made for white, or women created for men.",
        "author": "Alice Walker",
        "offensiveness": 1
    },
    {
        "quote": "He who is cruel to animals becomes hard also in his dealings with men. We can judge the heart of a man by his treatment of animals.",
        "author": "Emmanuel Kant",
        "offensiveness": 1
    },
    {
        "quote": "The love of all living creatures is the most noble attribute of man.",
        "author": "Charles Darwin",
        "offensiveness": 1
    },
    {
        "quote": "If you have men who will exclude any of God's creatures from the shelter of compassion and pity, you will have men who will deal likewise with their fellow men",
        "author": "St. Francis of Assisi",
        "offensiveness": 2
    },
    {
        "quote": "When it comes to having a central nervous system, and the ability to feel pain, hunger, and thirst, a rat is a pig is a dog is a boy.",
        "author": "Ingrid E Newkirk",
        "offensiveness": 2
    }
];

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
//# sourceMappingURL=animal-vegetable.mjs.map
