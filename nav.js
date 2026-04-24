<!-- shared-nav.js — included by every page -->
<script>
(function() {
  const path = location.pathname.split('/').pop() || 'main.html';

  const links = [
    { href: 'main.html',       label: 'Home' },
    { href: 'students.html',   label: 'Ph.D. Students' },
    { href: 'functional.html', label: 'Functional Analysis' },
    { href: 'algebra.html',    label: 'Algebra' },
    { href: 'geometry.html',   label: 'Geometry' },
    { href: 'stats-ml.html',   label: 'Stats & Data Science' },
    { href: 'modelling.html',  label: 'Modelling & Networks' },
    { href: 'forms.html',      label: 'Forms' },
  ];

  const navHtml = `
  <div class="topbar">
    <a href="https://snu.edu.in/programs/phd-in-mathematics/overview/" target="_blank">
      Shiv Nadar Institution of Eminence — Department of Mathematics
    </a>
  </div>
  <nav class="navbar">
    <div class="nav-inner">
      <a class="brand" href="main.html">
        <div class="brand-logo"><span>∑</span></div>
        <div class="brand-text">
          <div class="brand-name">SNU Mathematics</div>
          <div class="brand-sub">Ph.D. Program</div>
        </div>
      </a>
      <div class="nav-links" id="navLinks">
        ${links.map(l => `<a href="${l.href}" class="${l.href === path ? 'active' : ''}">${l.label}</a>`).join('')}
        <a class="btn-apply" href="https://shivnadaruniversity.nopaperforms.com/ph-d-application-form" target="_blank">Apply Now</a>
      </div>
      <button class="hamburger" onclick="document.getElementById('navLinks').classList.toggle('open')">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  const footerHtml = `
  <footer>
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <div class="footer-brand-name">SNU Mathematics Ph.D. Program</div>
          <p class="footer-desc">Shiv Nadar Institution of Eminence, NH-91, Tehsil Dadri, Greater Noida, Uttar Pradesh 201314</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="main.html">Home</a></li>
            <li><a href="students.html">Ph.D. Students</a></li>
            <li><a href="forms.html">Forms</a></li>
            <li><a href="https://snu.edu.in/programs/phd-in-mathematics/overview/" target="_blank">Official Site</a></li>
          </ul>
        </div>
        <div>
          <h4>Research Groups</h4>
          <ul>
            <li><a href="functional.html">Functional Analysis</a></li>
            <li><a href="algebra.html">Algebra</a></li>
            <li><a href="geometry.html">Geometry &amp; Topology</a></li>
            <li><a href="stats-ml.html">Stats &amp; Data Science</a></li>
            <li><a href="modelling.html">Modelling &amp; Networks</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:sneh.lata@snu.edu.in">Dr. Sneh Lata</a></li>
            <li><a href="mailto:lakshmi.arya@snu.edu.in">Ms. Lakshmi Arya</a></li>
            <li><a href="https://snu.edu.in/departments/department-of-mathematics/" target="_blank">Dept. Website</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&#169; ${new Date().getFullYear()} SNU Mathematics Ph.D. Program</span>
        <span>Maintained by the Ph.D. Scholars</span>
      </div>
    </div>
  </footer>`;

  document.write(navHtml);
  document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', footerHtml);
  });
})();
</script>
