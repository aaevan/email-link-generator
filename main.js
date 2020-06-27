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
    const subjectText = subject.replace(/ /g, "%20")
    const bodyText = body.replace(/ /g, "%20").replace(/\n/g, "%0A")
    const output_text = `mailto:${mailto}?bcc=${bcc}&subject=${subjectText}&body=${bodyText}`
    const outputId = document.querySelector("#output")
    outputId.value = output_text
  })
}

window.onload = () => {
  main();
};