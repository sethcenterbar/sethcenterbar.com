<script>
  export let repo;
  export let description;
  export let link;
</script>

<style>
  .card {
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
    white-space: nowrap;
  }
  .cardimg {
  }

  .cardcontent {
    height: 39%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 15px;
    padding-right: 15px;
  }

  .cardcontent {
    font-size: 0.8em;
  }
  .cardfooter {
    height: 12%;
    background: rgb(235, 235, 235);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .cardbutton {
    background: lightgreen;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transform: translate(150px, 128px);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s ease-in;
  }
  .cardbutton i {
    color: white;
    transform: translateY(-2px);
  }

  .cardbutton:hover {
    background: cyan;
  }
  .cardfooter h3 {
    font-size: 0.8em;
  }
  .cardreadme {
    color: rgb(150, 150, 150);
  }
  .cardcontent p:nth-child(1) {
    font-size: 0.8em;
  }
  .cardcontent h3 {
    font-size: 1.4em;
  }
  .cardcontent p:nth-child(2) {
    font-size: 0.9em;
  }
</style>

<main>
  <body>

    <div class="card">
      <div class="cardcontent">
        <p>Thursday, July 16, 2016</p>
        <h3>{repo}</h3>
        <p>{description}</p>
      </div>
      <div class="cardfooter">
        <h3>Read More</h3>
        <a href="{link}">
          <i
            class="fa fa-arrow-circle-right cardreadme"
            style="font-size:24px" />
        </a>
      </div>

      <div class="cardbutton">
        <i class="fa fa-envelope-open" style="font-size: 24px" />
      </div>

    </div>
  </body>
</main>
