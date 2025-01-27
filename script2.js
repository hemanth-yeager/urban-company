const images = document.querySelectorAll("#slideshow img");
        const progressBarsContainer = document.getElementById("progressBars");
        let currentIndex = 0;
        let interval = null;
        let isPaused = false;
        const duration = 3000; // Duration for each image in milliseconds

        // Create progress bars dynamically based on the number of images
        images.forEach(() => {
            const progressBarContainer = document.createElement("div");
            progressBarContainer.className = "progress-bar-container";

            const progressBar = document.createElement("div");
            progressBar.className = "progress-bar";

            progressBarContainer.appendChild(progressBar);
            progressBarsContainer.appendChild(progressBarContainer);
        });

        const progressBars = document.querySelectorAll(".progress-bar");

        // Function to switch to the next image
        function showNextImage() {
            // Reset the current progress bar
            progressBars[currentIndex].style.width = "0";

            // Move to the next image
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");

            // Start the new progress bar animation
            progressBars[currentIndex].style.transition = `width ${duration / 1000}s linear`;
            progressBars[currentIndex].style.width = "100%";
        }

        // Start the slideshow
        function startSlideshow() {
            interval = setInterval(showNextImage, duration);

            // Start the progress bar for the first image
            progressBars[currentIndex].style.transition = `width ${duration / 1000}s linear`;
            progressBars[currentIndex].style.width = "100%";
        }

        // Pause the slideshow
        function pauseSlideshow() {
            clearInterval(interval);

            // Stop all progress bar animations
            progressBars[currentIndex].style.transition = "none";
        }

        // Toggle pause/resume on click
        document.getElementById("slideshow").addEventListener("click", () => {
            if (isPaused) {
                startSlideshow();
                document.getElementById("message").textContent = "Click on the slideshow to pause or resume.";
            } else {
                pauseSlideshow();
                document.getElementById("message").textContent = "Slideshow paused. Click to resume.";
            }
            isPaused = !isPaused;
        });

        // Start the slideshow on page load
        startSlideshow();

        // fixing div
        const scrollableDiv = document.getElementById("scrollableDiv");
        const headerHeight = 60; // Height of the header
        const initialOffset = scrollableDiv.offsetTop; // Initial top offset of the div

        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY; // How far the page is scrolled

            // Fix the div only if the scroll position passes its initial offset
            if (scrollTop + headerHeight >= initialOffset) {
                scrollableDiv.classList.add("fixed");
            } else {
                scrollableDiv.classList.remove("fixed");
            }
        });
        //review scroll
        const scrollableDiv1 = document.getElementById("scrollable-div");

        function scrollDiv(scrollAmount) {
            scrollableDiv1.scrollBy({
                left: scrollAmount, // Scroll horizontally by scrollAmount
                behavior: "smooth"  // Smooth scrolling
            });
        }
        //popup
        document.addEventListener("DOMContentLoaded", () => {
            const thumbnail = document.getElementById("thumbnail");
            const popup = document.getElementById("popup");
            const closeButton = document.getElementById("close-button");
        
            // Show popup when thumbnail is clicked
            thumbnail.addEventListener("click", () => {
                popup.classList.remove("hidden");
            });
        
            // Hide popup when close button is clicked
            closeButton.addEventListener("click", () => {
                popup.classList.add("hidden");
            });
        
            // Hide popup when clicking outside the content
            popup.addEventListener("click", (event) => {
                if (event.target === popup) {
                    popup.classList.add("hidden");
                }
            });
        });
        