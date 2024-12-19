function calculateMix() {
    const hConcentration = parseFloat(document.getElementById('h-concentration').value);
    const ohConcentration = parseFloat(document.getElementById('oh-concentration').value);
    const target = parseFloat(document.getElementById('target').value);

    let resultText = '';

    // ตรวจสอบความเข้มข้นของ H⁺
    if (!isNaN(hConcentration) && hConcentration > 0) {
        // คำนวณ pH จาก H⁺ concentration
        const pH = -Math.log10(hConcentration);
        resultText += `ค่า pH ของสารละลายที่มีความเข้มข้นของ H⁺ = ${hConcentration} mol/L คือ ${pH.toFixed(2)}<br>`;
    }

    // ตรวจสอบความเข้มข้นของ OH⁻
    if (!isNaN(ohConcentration) && ohConcentration > 0) {
        // คำนวณ pOH จาก OH⁻ concentration
        const pOH = -Math.log10(ohConcentration);
        resultText += `ค่า pOH ของสารละลายที่มีความเข้มข้นของ OH⁻ = ${ohConcentration} mol/L คือ ${pOH.toFixed(2)}<br>`;
        
        // คำนวณ pH จาก pOH
        const pHfromOH = 14 - pOH;
        resultText += `จากนั้น pH ที่คำนวณจาก pOH คือ ${pHfromOH.toFixed(2)}<br>`;
    }

    // กรณีที่ผู้ใช้กรอกค่า pH
    if (!isNaN(target) && target >= 0 && target <= 14) {
        resultText += `เป้าหมาย pH ของคุณคือ: ${target}.<br>`;
        
        // คำนวณความเข้มข้นของ H⁺ จากค่า pH
        const targetHConcentration = Math.pow(10, -target);
        resultText += `ความเข้มข้นของ H⁺ ที่ต้องการ: ${targetHConcentration.toExponential(2)} mol/L<br>`;
        
        // คำนวณความเข้มข้นของ OH⁻ จากค่า pH
        const targetOHConcentration = Math.pow(10, -(14 - target));
        resultText += `ความเข้มข้นของ OH⁻ ที่ต้องการ: ${targetOHConcentration.toExponential(2)} mol/L<br>`;
    }

    // แสดงผลลัพธ์
    document.getElementById('mix-output').innerHTML = resultText;
}
