const filterButtons =
document.querySelectorAll(".filter-btn");

const foodCards =
document.querySelectorAll(".food-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // hapus active lama
        filterButtons.forEach(btn => {

            btn.classList.remove("active-btn");

        });

        // active baru
        button.classList.add("active-btn");

        // ambil filter
        const filter =
        button.dataset.filter;

        foodCards.forEach(card => {

            // ALL
            if(filter === "all"){

                card.style.display = "block";
            }

            // FILTER SESUAI CLASS
            else if(
                card.classList.contains(
                    filter + "-card"
                )
            ){

                card.style.display = "block";
            }

            // SEMBUNYIKAN
            else{

                card.style.display = "none";
            }

        });

    });

});