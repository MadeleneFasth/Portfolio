<template>
     <div class="accordion-item">
      <h3 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
          Backend
        </button>
      </h3>
      <div
        id="collapseFive"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <ul class="accordion-body">
          <li>JavaScript express</li>
          <li>Database</li>
          <li>REST API med express</li>
          <li>CRUD</li>
          <li>Headless CMS-Strapi</li>
          <li>Authentication & Authorization</li>
          <li>Token based Authentication</li>
          <li>Real time communication (Sockets.io with flask)</li>
        </ul>
      </div>
    </div>
</template>