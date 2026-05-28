function simular(tipo) {
    const resultadoDiv = document.getElementById('resultado');
    
    if (tipo === 'quimico') {
        resultadoDiv.innerHTML = "⚠️ <strong>Impacto Crítico:</strong> Alta produção inicial, mas gera resistência de pragas, elimina polinizadores (como abelhas) e contamina o lençol freático a longo prazo.";
        resultadoDiv.style.backgroundColor = "#ffebee";
        resultadoDiv.style.color = "#c62828";
    } else if (tipo === 'ecologico') {
        resultadoDiv.innerHTML = "🌱 <strong>Equilíbrio Alcançado:</strong> Solo protegido e fértil, preservação de insetos benéficos, alimentos sem resíduos químicos e biodiversidade em harmonia com o lucro do produtor!";
        resultadoDiv.style.backgroundColor = "#e8f5e9";
        resultadoDiv.style.color = "#2e7d32";
    }
}
