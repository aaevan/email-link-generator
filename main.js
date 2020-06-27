const main = () => {
  const button = document.querySelector("#generate")
  console.log(button)
  button.addEventListener("click", () => {
    const mailto = document.querySelector("#mailto").value;
    const bcc = document.querySelector("#bcc").value;
    const subject = document.querySelector("#subject").value;
    const body = document.querySelector("#body").value;
    console.log(`
      mailto: ${mailto},
      bcc: ${bcc},
      subject: ${subject}, 
      body: ${body}
    `)
    const output_text = `mailto:${mailto}?bcc=${bcc}&subject=${subject.replace(/ /g, "%20")}&body=${body.replace(/ /g, "%20")}`
    const outputId = document.querySelector("#output")
    outputId.value = output_text
  })
}

window.onload = () => {
  main();
};

//`mailto:${mailto}?bcc=${bcc}&subject=${subject.replace(/ /g, "%20")}&body=${body.replace(/ /g, "%20")}`