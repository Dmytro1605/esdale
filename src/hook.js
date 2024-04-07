import paperTypes from "./constants/paperTypes";


export const calculateResult = (props) => {
    console.log(props)
    const {setResultInches, selectedPaper, selectedType, selectedWeight, startWidth, finishWidth, startLength, finishLength,
        requiredSheets} = props
    const selectedPaperDetails = paperTypes.find(paper => paper.name === selectedPaper)?.details;
    const selectedTypeDetail = selectedPaperDetails?.find(detail => detail.type === selectedType);
    const weightDetail = selectedTypeDetail?.weights.find(weight => weight.value === parseInt(selectedWeight));

    if (!weightDetail) {
        setResultInches("Please ensure all selections are made.");
        return;
    }

    let ratio = 1; // Значення за замовчуванням, якщо розміри не введені

    if (startWidth && finishWidth && startLength && finishLength) {
        const widthRatio = Math.floor(Number(startWidth) / Number(finishWidth));
        const lengthRatio = Math.floor(Number(startLength) / Number(finishLength));
        ratio = widthRatio * lengthRatio;
    } else {
        alert("Please enter dimensions for accurate calculations.");
        return;
    }

    const total = (Number(requiredSheets) / ratio) * weightDetail.pricePerUnit/100;
    const totalCost = total * 25.4;
    setResultInches(`Total inches: ${total.toFixed(3)}, Total millimeters: ${totalCost.toFixed(1)}`);
};