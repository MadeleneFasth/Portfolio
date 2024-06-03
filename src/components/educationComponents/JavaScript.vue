<template>
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        JavaScript 1, 2 and 3
      </button>
    </h3>
    <div
      id="collapseTwo"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <p>JavaScript 1</p>
        <ul>
          <li>Grundläggande JavaScript</li>
          <li>Document Object Model (DOM)</li>
          <li>Funktioner, iterationer & listor</li>
          <li>Objekt & prototyper</li>
          <li>Higher order functions</li>
        </ul>

        <p>JavaScript 2</p>
        <ul>
          <li>Objektorientering</li>
          <li>Asynkront (Promise, Ajax)</li>
          <li>Ramverk (Vue, React JS)</li>
          <li>JQuery</li>
          <li>Node.Js</li>
          <li>Git</li>
        </ul>

        <p>JavaScript 3</p>
        <ul>
          <li>Http protocol</li>
          <li>Sockets</li>
          <li>Testdriven utveckling (TDD)</li>
          <li>Djupdykning ramverk (React Js)</li>
        </ul>
      </div>
    </div>
  </div>
</template>
