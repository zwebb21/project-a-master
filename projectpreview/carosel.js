
  const evidenceImages = document.querySelectorAll(".evidence-image");
  const enlargedImage = document.getElementById("enlargedEvidenceImage");
  const previewTitle = document.getElementById("imagePreviewLabel");

  evidenceImages.forEach((image) => {
    image.addEventListener("click", () => {
      enlargedImage.src = image.src;
      enlargedImage.alt = image.alt;
      previewTitle.textContent = image.alt;
    });
  });
