<script>
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', function () {
                const hiddenContent = this.previousElementSibling;
                if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
                    hiddenContent.style.display = 'block';
                    this.textContent = 'Read Less ←';
                } else {
                    hiddenContent.style.display = 'none';
                    this.textContent = 'Read More →';
                }
            });
        });
    </script>