<script>
  import { onMount } from "svelte";
  import TypeIt from "typeit";

  onMount(() => {
    new TypeIt("#typeit", {
      speed: 75,
      waitUntilVisible: true,
      cursor: false
    }).go();
  });
</script>

<style>
  .container {
    margin: 0 auto;
    margin-top: 3rem;
    min-height: 100%;
    display: grid;
    max-width: 50%;
  }

  .container img {
    border-radius: 50%;
    width: auto;
    height: auto;
    height: 300px;
  }

  h2 {
    font-size: 2rem;
  }

  .hi {
    margin-top: 2rem;
  }

  .about-me {
    text-align: center;
    margin-top: 1.5rem;
    font-size: 1.2rem;
  }

  .about-me h2 {
    text-align: left;
  }

  .about-me p {
    margin-top: .3rem;
    text-align: justify;
    line-height: 140%;
  }

  .social {
    margin-top: 2rem;
  }

  .social svg {
    height: 40px;
  }

  .titles {
    margin-top: 1rem;
    min-width: 100%;
  }

  .titles ul {
    font-size: 3rem;
    text-align: left;
    font-family: "Overpass";
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .de {
    filter: grayscale(100%);
    color: #522d5b;
  }

  .de:hover {
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    filter: grayscale(5%);
  }

  .dd {
    filter: grayscale(100%);
    color: #d7385e;
  }

  .dd:hover {
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    filter: grayscale(5%);
  }

  .dbe {
    filter: grayscale(100%);
    color: #fb7b6b;
  }

  .dbe:hover {
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    filter: grayscale(5%);
  }

  .dba {
    filter: grayscale(100%);
    color: #e7d39f;
  }

  .dba:hover {
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    filter: grayscale(5%);
  }

  .mo {
    filter: grayscale(100%);
    color: #00bcd4;
  }

  .mo:hover {
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    filter: grayscale(5%);
  }

  .wd {
    filter: grayscale(100%);
    color: #ff5722;
  }

  .wd:hover {
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    filter: grayscale(5%);
  }

  .oa {
    filter: grayscale(100%);
    color: #dd2c00;
  }

  .oa:hover {
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    filter: grayscale(5%);
  }

  .fa-twitter {
    color: #1da1f2;
  }

  .fa-linkedin {
    color: #1da1f2;
  }

  .fa-github {
    color: var(--navbar-bg);
  }

  @media (max-width: 1500px) {
    .container {
      max-width: 70%;
    }
  }

  @media (max-width: 900px) {
    .container {
      max-width: 80%;
    }
  }

  @media (max-width: 600px) {
    .container {
      max-width: 90%;
    }
  }
  /* CSS Tricks for image hover */
  .hover_image:hover {
    text-decoration: none;
  }

  .hide {
    display: none;
  }

  .hover_image:hover img:first-child {
    display: none;
  }

  .hover_image:hover img:last-child {
    display: inline-block;
  }
</style>

<div class="container">
  <div class="headshot hover_image">
    <img alt="headshot" src="headshot.png" />
    <img alt="meme headshot" src="memeheadshot.png" class="hide" />
  </div>
  <div class="hi">
    <h1 id="typeit">Hi, I'm Seth 👋</h1>
    <h2>I've held quite a few titles in the last 7 years.</h2>
    <div class="titles">
      <ul>
        <li class="de">Data Engineer</li>
        <li class="dbe">Database Engineer</li>
        <li class="dba">Database Administrator</li>
        <li class="dd">Database Developer</li>
        <li class="wd">Web Developer</li>
        <li class="oa">Operations Analyst</li>
        <li class="mo">Mainframe Operator</li>
      </ul>
    </div>
    <div class="about-me">
      <h2>About Me</h2>
      <p>
        Hey! I'm Seth, an experienced Database Engineer with a demonstrated
        history of working in the computer software industry. Passionate about
        Linux, open source software, devops, and automation. Skilled in
        scripting languages such as Python, Powershell, and Bash. Strong
        database fundamentals with experience in SQLServer, MySQL, MongoDB,
        PostgreSQL, and Elasticsearch. Seasoned information technology
        professional with a Bachelor of Science - BS focused in Computer Science
        from Columbus State University.
      </p>
    </div>
  </div>
  <div class="social">
    <a href="https://twitter.com/sethcenterbar">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="twitter"
        class="svg-inline--fa fa-twitter fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583
          298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106
          8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568
          130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974
          12.995 1.624 19.818 1.624 9.421 0 18.843-1.3
          27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969
          7.797 30.214 12.67 47.431
          13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36
          14.294-52.954 51.655 63.675 129.3 105.258 216.365
          109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934
          104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548
          46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827
          21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161
          39.308-52.628 54.253z" />
      </svg>
    </a>
    <a href="https://www.linkedin.com/in/seth-centerbar-86680a142/">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="linkedin"
        class="svg-inline--fa fa-linkedin fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9
          480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4
          416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96
          102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1
          243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9
          54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0
          79.7 44.3 79.7 101.9V416z" />
      </svg>
    </a>
    <a href="https://dev.to/sethcenterbar">
      <svg
        viewBox="0 32 448 448"
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38">
        <path
          d="M120.12
          208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0
          7.77-1.45 11.65-4.35s5.82-7.25
          5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7
          32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0
          43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2
          291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0
          47.36 28.46 47.37
          47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15
          8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85
          24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z" />
      </svg>
    </a>
    <a href="https://github.com/sethcenterbar">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="github"
        class="svg-inline--fa fa-github fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512">
        <path
          fill="currentColor"
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6
          5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1
          5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2
          2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7
          4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0
          110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1
          0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0
          0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9
          20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5
          7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27
          20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7
          34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9
          104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5
          4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8
          244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1
          1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9
          1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4
          35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1
          1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6
          0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9
          0-6.2-1.4-2.3-4-3.3-5.6-2z" />
      </svg>
    </a>
  </div>
</div>
