	document.addEventListener('mousemove', function(e) {
            const glitter = document.createElement('div');
            glitter.className = 'glitter';
            glitter.style.left = e.pageX + 'px';
            glitter.style.top = e.pageY + 'px';
            document.body.appendChild(glitter);
            
            setTimeout(() => {
                glitter.remove();
            }, 1000);
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }