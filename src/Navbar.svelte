<script>
  import { Navigate } from "svelte-router-spa";
</script>

<style>
  .navbar {
    position: fixed;
    background-color: var(--bg-primary);
    transition: width 200ms ease;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  }

  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .nav-item:last-child {
    margin-top: auto;
  }

  .nav-link {
    display: flex;
    align-items: center;
    height: 3rem;
    color: var(--text-primary);
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
  }

  .nav-link:hover {
    filter: grayscale(0%) opacity(1);
    /* background: var(--bg-secondary); */
    color: var(--text-secondary);
  }

  .link-text {
    display: none;
    font-family: "Vollkorn";
  }

  .nav-link svg {
    min-width: 1rem;
    max-width: 1rem;
    margin: 0 1.5rem;
  }

  .fa-primary {
    color: var(--accent);
    transition: var(--transition-speed);
  }

  .logo {
    font-weight: bold;
    font-size: 1.1rem;
    font-family: "Vollkorn";
    letter-spacing: 0.3ch;
    text-align: center;
    color: var(--text-secondary);
    width: 100%;
  }

  .logo svg {
    transform: rotate(0deg);
    transition: transform var(--transition-speed);
  }

  .navbar:hover .logo svg {
    transform: rotate(-270deg);
  }

  /* Small Screen */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 3rem;
    }

    .navbar-nav {
      flex-direction: row;
    }

    .nav-link {
      justify-content: center;
    }

    .main {
      margin: 0;
    }
  }

  /* Large Screen */
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 4rem;
      height: 100vh;
    }

    .navbar:hover {
      width: 13rem;
    }

    .navbar:hover .link-text {
      display: inline;
      transition: opacity var(--transition-speed);
      margin-left: 1rem;
    }

    .logo {
      margin-bottom: 1rem;
    }
  }
</style>

<nav class="navbar">
  <ul class="navbar-nav">
    <li class="logo">
      <a href="/" class="nav-link">
        <span class="link-text logo-text">Seth Centerbar</span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="signature"
          class="svg-inline--fa fa-signature fa-w-20"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512">
          <path
            fill="currentColor"
            d="M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5-29.1 13.1-54.2
            24.4-76.1 24.4-22.6 0-26-16.2-21.3-51.9 1.1-8
            11.7-79.2-42.7-76.1-25.1 1.5-64.3 24.8-169.5 126L192
            182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5
            138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2
            32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4
            42.2-42.2 154.7-150.7 211.2-195.8-2.2 28.5-2.1 58.9 20.6 83.8 15.3
            16.8 37.3 25.3 65.5 25.3 35.6 0 68-14.6 102.3-30 33-14.8 99-62.6
            138.4-65.8 8.5-.7 15.2-7.3
            15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2z"
            class="fa-primary" />
        </svg>
      </a>
    </li>

    <li class="nav-item">
      <a href="#" class="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star-half-alt"
          class="svg-inline--fa fa-star-half-alt fa-w-17"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 536 512">
          <path
            fill="currentColor"
            d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0
            267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38
            21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06
            145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17
            14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71
            18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5
            8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52
            113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63
            25.01 3.64 114.23 16.63-82.65 80.38z"
            class="fa-primary" />
        </svg>
        <span class="link-text">Skills</span>
      </a>
    </li>

    <li class="nav-item">
      <a href="https://www.linkedin.com/in/seth-centerbar-86680a142/" class="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="file-alt"
          class="svg-inline--fa fa-file-alt fa-w-12"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512">
          <path
            fill="currentColor"
            d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24
            24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0
            6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12
            12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6
            0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12
            12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6
            5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0
            12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
            class="fa-primary" />
        </svg>
        <span class="link-text">Resume</span>
      </a>
    </li>

    <li class="nav-item">
      <a href="https://dev.to/sethcenterbar" class="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="book-dead"
          class="svg-inline--fa fa-book-dead fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M272 136c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16
            16zm176 222.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0
            96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6
            25.6-25.6v-16c0-6.4-3.2-12.8-9.6-19.2-3.2-16-3.2-60.8 0-73.6 6.4-3.2
            9.6-9.6 9.6-19.2zM240 56c44.2 0 80 28.7 80 64 0 20.9-12.7 39.2-32
            50.9V184c0 8.8-7.2 16-16 16h-64c-8.8
            0-16-7.2-16-16v-13.1c-19.3-11.7-32-30-32-50.9 0-35.3 35.8-64
            80-64zM124.8 223.3l6.3-14.7c1.7-4.1 6.4-5.9 10.5-4.2l98.3 42.1
            98.4-42.1c4.1-1.7 8.8.1 10.5 4.2l6.3 14.7c1.7 4.1-.1 8.8-4.2
            10.5L280.6 264l70.3 30.1c4.1 1.7 5.9 6.4 4.2 10.5l-6.3 14.7c-1.7
            4.1-6.4 5.9-10.5 4.2L240 281.4l-98.3 42.2c-4.1
            1.7-8.8-.1-10.5-4.2l-6.3-14.7c-1.7-4.1.1-8.8
            4.2-10.5l70.4-30.1-70.5-30.3c-4.1-1.7-5.9-6.4-4.2-10.5zm256
            224.7H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8zM208 136c8.8 0
            16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z"
            class="fa-primary" />
        </svg>
        <span class="link-text">Blog</span>
      </a>
    </li>

    <li class="nav-item">
      <a href="https://github.com/sethcenterbar" class="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="toolbox"
          class="svg-inline--fa fa-toolbox fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M502.63
            214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51
            0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37
            214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16
            16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16
            16-16h32c8.84 0 16 7.16 16
            16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62zM320
            160H192V96h128v64zm64 208c0 8.84-7.16 16-16 16h-32c-8.84
            0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84
            0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33
            32-32v-96H384v16z"
            class="fa-primary" />
        </svg>
        <span class="link-text">Projects</span>
      </a>
    </li>

    <li class="nav-item">
      <a href="/contact" class="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="address-card"
          class="svg-inline--fa fa-address-card fa-w-18"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512">
          <path
            fill="currentColor"
            d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5
            0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208
            256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64
            64zm-89.6 128h179.2c12.4 0 22.4-8.6
            22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9
            0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4
            19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8
            3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6
            8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8
            8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8
            8v16c0 4.4 3.6 8 8 8z"
            class="fa-primary" />
        </svg>
        <span class="link-text">Contact</span>
      </a>
    </li>
  </ul>
</nav>
