	function scrollToTop() {
            document.documentElement.scrollTop = 0;
        }

        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("scrollTopBtn").style.display = "block";
            } else {
                document.getElementById("scrollTopBtn").style.display = "none";
            }
        }

        document.addEventListener('mousemove', (e) => {
            let glitter = document.createElement('div');
            glitter.classList.add('glitter');
            document.body.appendChild(glitter);

            glitter.style.left = `${e.pageX}px`;
            glitter.style.top = `${e.pageY}px`;

            setTimeout(() => {
                glitter.remove();
            }, 1000);
        });