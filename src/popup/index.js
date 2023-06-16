import "../app.css";

import Every from '../components/every.svelte';

const target = document.getElementById('app');

async function render() {
  new Every({target});
}

document.addEventListener('DOMContentLoaded', render);