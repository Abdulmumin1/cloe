<script>
  import { OpenAIApi, Configuration } from "openai";
  let selectedOption = "Explain this";

  const configuration = new Configuration({
    apiKey: "YOUR_KEY",
  });
  const openai = new OpenAIApi(configuration);

  $: result = "";
  let inputText = "";

  async function queryChatGPT(query) {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${selectedOption} "${query}"`,
      max_tokens: 4000,
    });
    result = completion.data.choices[0].text;
  }

  function print_me() {
    queryChatGPT(inputText);
  }

  function handleInput(event) {
    inputText = event.target.value;
  }

  function handleOptionChange(event) {
    selectedOption = event.target.value;
    event.target.style.height = "auto";
    event.target.style.height = event.scrollHeight + "px";
  }
</script>

<div class=" p-4 bg-[#333] text-orange-50 w-[20rem] flex flex-col rounded-xl">
  <div class="inline-block">
    <!-- <h1>Cloe</h1> -->
    <i>Clever AI patner</i>
  </div>

  <textarea
    bind:value={inputText}
    on:input={handleInput}
    class="bg-inherit border-2 rounded-lg mb-2 border-gray-600 h-20"
  />

  <div class="flex items-center space-x-2">
    <div class="flex items-center space-x-4 h-full">
      <label
        class="inline-flex cursor-pointer items-center bg-orange-200 border-black rounded-full p-2"
      >
        <input
          type="radio"
          class="form-radio"
          name="option"
          bind:group={selectedOption}
          value="Explain this"
          on:change={handleOptionChange}
        />
        <span class="ml-2 text-black">Explain</span>
      </label>
      <label
        class="inline-flex cursor-pointer items-center bg-rose-600 border-black rounded-full p-2"
      >
        <input
          type="radio"
          class="form-radio"
          name="option"
          bind:group={selectedOption}
          value="Summarize this"
          on:change={handleOptionChange}
        />
        <span class="ml-2">Summarize</span>
      </label>
    </div>
    <button
      id="getSelectedText"
      on:click={print_me}
      class="text-xl w-full h-full bg-green-300 text-gray-900 rounded-lg hover:bg-gray-500 transition-transform transform hover:scale-105"
    >
      Go
    </button>
  </div>
  <p id="result" class="rounded-lg bg-[#444] mt-2 p-2">{result}</p>
</div>

<style>
  /* Hide the default scrollbar */
  textarea::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  /* Track */
  textarea::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Handle */
  textarea::-webkit-scrollbar-thumb {
    background-color: rgb(75 85 99);
    border-radius: 4px;
  }

  /* Handle on hover */
  textarea::-webkit-scrollbar-thumb:hover {
    background-color: rgb(75 85 99);
  }
</style>
