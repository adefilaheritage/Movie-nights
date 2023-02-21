const movies = [{
    genres: ["Animation", "Adventure", "Comedy"],
    original_title: "Puss in Boots: The Last Wish",
    overview: "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    release_date: "2022-12-07",
    title: "Puss in Boots: The Last Wish",
}, {
    genres: ["Sci-fi"],
    original_title: "M3GAN",
    overview: "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
    release_date: "2022-12-28",
    title: "M3GAN",
}, {
    genres: ["Sci-fi", "Adventure"],
    original_title: "Avatar: The Way of Water",
    overview: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    release_date: "2022-12-14",
    title: "Avatar: The Way of Water",
},{
	genres: ["Exorcism", "Religious", "Dark"],
	original_title: "Prey for the Devil",
	overview: "In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.",
	release_date: "2022-10-23",
	title: "Prey for the Devil",
    rating: 4.5
}]

document.getElementById("animation_1").innerHTML = movies[0].genres[0,1,2]
document.getElementById("adventure_1").innerHTML = movies[0].genres[1]
document.getElementById("comedy_1").innerHTML = movies[0].genres[2]
document.getElementById("date_large").innerHTML = movies[0].release_date
document.getElementById('title_large').innerHTML = movies[0].title
document.getElementById('overview_large').innerHTML = movies[0].overview

document.getElementById("genres").innerHTML = movies[1].genres
document.getElementById("date").innerHTML = movies[1].release_date
document.getElementById("title_small").innerHTML = movies[1].title
document.getElementById("overview").innerHTML = movies[1].overview

document.getElementById("sci-fi2").innerHTML = movies[2].genres[0]
document.getElementById("genres2").innerHTML = movies[2].genres[1]
document.getElementById("date2").innerHTML = movies[2].release_date
document.getElementById("title_small2").innerHTML = movies[2].title
document.getElementById("overview2").innerHTML = movies[2].overview

document.getElementById("exorcism").innerHTML = movies[3].genres[0]
document.getElementById("religious").innerHTML = movies[3].genres[1]
document.getElementById("dark").innerHTML = movies[3].genres[2]
document.getElementById("date3").innerHTML = movies[3].release_date
document.getElementById("title_small3").innerHTML = movies[3].title
document.getElementById("overview3").innerHTML = movies[3].overview