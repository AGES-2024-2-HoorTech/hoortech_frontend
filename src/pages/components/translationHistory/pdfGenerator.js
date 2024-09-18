// pdfGenerator.js
import jsPDF from "jspdf";

export class PDFGenerator {
    constructor(translations) {
        this.translations = translations;
    }

    generatePDF() {
        const doc = new jsPDF();

        // Configurações de fonte e estilo
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("Histórico de Traduções", 105, 20, { align: "center" }); // Título centralizado

        // Adicionar uma linha abaixo do título
        doc.setLineWidth(0.5);
        doc.line(10, 25, 200, 25); // Linha horizontal

        // Configurações de fonte e tamanho para o corpo do texto
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        // Margens e configuração da largura das colunas
        const col1X = 10; // Posição X da coluna da hora
        const col1Width = 30; // Largura da coluna da hora
        const col2X = 50; // Posição X da coluna do texto (início da coluna de texto)
        const rowHeight = 10; // Altura das linhas
        let yPosition = 30; // Posição vertical inicial para o primeiro item

        // Desenha os cabeçalhos das colunas
        doc.setFont("helvetica", "bold");
        doc.text("Hora", col1X, yPosition + 7);
        doc.text("Texto traduzido", col2X, yPosition + 7);
        yPosition += rowHeight + 5; // Ajusta a posição para a próxima linha

        // Adicionar uma linha horizontal abaixo dos cabeçalhos
        doc.setLineWidth(0.5);
        doc.line(10, yPosition, 200, yPosition); // Linha horizontal
        yPosition += 5; // Espaçamento abaixo da linha horizontal

        this.translations.forEach((translation, index) => {
            if (yPosition > 270) {
                doc.addPage(); // Adiciona uma nova página se o conteúdo ultrapassar o limite da página
                yPosition = 20; // Reseta a posição vertical na nova página
                doc.setFont("helvetica", "bold");
                doc.text("Hora", col1X, yPosition + 7);
                doc.text("Texto traduzido", col2X, yPosition + 7);
                yPosition += rowHeight + 5; // Ajusta a posição para a próxima linha
                doc.setLineWidth(0.5);
                doc.line(10, yPosition, 200, yPosition); // Linha horizontal
                yPosition += 5; // Espaçamento abaixo da linha horizontal
            }

            // Alterna a cor de fundo entre branco e cinza claro
            const isEvenRow = index % 2 === 0;
            doc.setFillColor(isEvenRow ? 255 : 230); // 255 = branco, 230 = cinza claro

            // Calcula a altura do texto
            const textWidth = 190 - (col1Width + 10);
            const splitText = doc.splitTextToSize(translation.text, textWidth);
            const textHeight = splitText.length * rowHeight;

            // Ajusta a posição vertical se necessário
            if (yPosition + textHeight > 270) {
                doc.addPage(); // Adiciona uma nova página se o conteúdo ultrapassar o limite da página
                yPosition = 20; // Reseta a posição vertical na nova página
                doc.setFont("helvetica", "bold");
                doc.text("Hora", col1X, yPosition + 7);
                doc.text("Texto traduzido", col2X, yPosition + 7);
                yPosition += rowHeight + 5; // Ajusta a posição para a próxima linha
                doc.setLineWidth(0.5);
                doc.line(10, yPosition, 200, yPosition); // Linha horizontal
                yPosition += 5; // Espaçamento abaixo da linha horizontal
            }

            // Desenha o retângulo preenchido
            doc.rect(10, yPosition - rowHeight, 190, rowHeight + textHeight, 'F');

            // Exibe a hora da tradução
            doc.setFont("helvetica", "normal");
            doc.text(`${translation.time}`, col1X, yPosition + rowHeight / 2);

            // Exibe o texto da tradução, quebrando o texto se necessário
            doc.text(splitText, col2X, yPosition + rowHeight / 2);

            yPosition += rowHeight + textHeight; // Incrementa a posição vertical para a próxima linha
        });

        // Salva o PDF com um nome personalizado
        doc.save("translation-history.pdf");
    }
}
