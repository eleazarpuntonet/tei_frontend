import React, { useEffect, useState } from 'react';
import './VistaIndividualPDF.css';
import { useSelector } from 'react-redux';
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export const VistaIndividualPDF = () => {
  const [generatePDF, setGeneratePDF] = useState(true);
  const propiedadIndividual = useSelector((state) => state.data.propiedadSelection);


  useEffect(() => {
    if (propiedadIndividual && generatePDF) {
      const doc = new jsPDF();

      // Set font name and style
      doc.setFont('Helvetica');
      doc.setFontSize(styles.title.fontSize);

      // Calculate text position
      const textWidth = doc.getStringUnitWidth(`${propiedadIndividual.nombre}`) * styles.title.fontSize / doc.internal.scaleFactor;
      const pageWidth = doc.internal.pageSize.width;
      const xPos = (pageWidth - textWidth) / 2;
      const yPos = 20; // You can adjust this value for the desired vertical position

      doc.text(`${propiedadIndividual.nombre}`, xPos, yPos);
      doc.setFontSize(styles.subheader.fontSize);
    //   doc.text("Detalles de la propiedad", 10, 40);

      const headers = [["Caracteristicas", " "]];
      const data = [
        ["Dirección", propiedadIndividual.direccion],
        ["Descripción", doc.splitTextToSize(propiedadIndividual.descripcion.replace('<p>', '').replace('</p>', '').replace('<ul>', '').replace('</ul>', '').replace('<li>', '').replace('</li>', '').replace(/(<([^>]+)>)/gi, ""), 180)],
        ["Baños", propiedadIndividual.numero_banios],
        ["Habitaciones", propiedadIndividual.habitaciones],
        ["Plantas", propiedadIndividual.numero_plantas],
        ["Metros cuadrados de terreno", propiedadIndividual.metros_cuadrados_terreno],
        ["Metros cuadrados de construcción", propiedadIndividual.metros_cuadrados_construccion],
        ["Metraje total", propiedadIndividual.metraje_total],
        ["Fecha de publicación", propiedadIndividual.fecha_publicacion],
        ["Estacionamientos", propiedadIndividual.ptos_estacionamiento],
        ["Precio", propiedadIndividual.precio],
        ["Precio en USD", propiedadIndividual.precio_usd]
      ];

      autoTable(doc, {
        head: headers,
        body: data,
        startY: 50,
        styles: { fontSize: 12, cellPadding: 1, overflow: 'linebreak' },
        headStyles: { fillColor: [221, 221, 221], textColor: 20 },
        bodyStyles: { fillColor: [255, 255, 255] }
      });

      doc.save(`${propiedadIndividual.nombre}.pdf`);
      setGeneratePDF(false); // Reset the state after generating the PDF
    }
  }, [propiedadIndividual,generatePDF]);

  if (!propiedadIndividual) {
    return <div>No hay información de la propiedad para mostrar.</div>;
  }

  return (
    <div className="container__">
      <h1 className="title">{propiedadIndividual.nombre}</h1>
      <h2 className="subheader">Detalles de la propiedad</h2>
      <div className="detail-section">
        <div className="detail-item-large">
          <span className="section-title">Descripción: </span>
          <div dangerouslySetInnerHTML={{ __html: propiedadIndividual.descripcion }} />
        </div>
      </div>
      <div className="detail-section">
        <div className="detail-item">
          <span className="section-title">Dirección: </span>
          {propiedadIndividual.direccion}
        </div>
        <div className="detail-item">
          <span className="section-title">Baños: </span>
          {propiedadIndividual.numero_banios}
        </div>
        <div className="detail-item">
          <span className="section-title">Habitaciones: </span>
          {propiedadIndividual.habitaciones}
        </div>
        <div className="detail-item">
          <span className="section-title">Plantas: </span>
          {propiedadIndividual.numero_plantas}
        </div>
        <div className="detail-item">
          <span className="section-title">Metros cuadrados de terreno: </span>
          {propiedadIndividual.metros_cuadrados_terreno}
        </div>
        <div className="detail-item">
          <span className="section-title">Metros cuadrados de construcción: </span>
          {propiedadIndividual.metros_cuadrados_construccion}
        </div>
        <div className="detail-item">
          <span className="section-title">Metraje total: </span>
          {propiedadIndividual.metraje_total}
        </div>
        <div className="detail-item">
          <span className="section-title">Fecha de publicación: </span>
          {propiedadIndividual.fecha_publicacion}
        </div>
        <div className="detail-item">
          <span className="section-title">Estacionamientos: </span>
          {propiedadIndividual.ptos_estacionamiento}
        </div>
        <div className="detail-item">
          <span className="section-title">Precio: </span>
          {propiedadIndividual.precio}
        </div>
        <div className="detail-item">
          <span className="section-title">Precio en USD: </span>
          {propiedadIndividual.precio_usd}
        </div>
      </div>
    </div>
  );
}

const styles = {
  title: {
    fontSize: 20,
    bold: true
  },
  subheader: {
    fontSize: 16,
    margin: [0, 20, 0 ,0]
  },
  sectionTitle: {
    fontSize: 16,
    bold: true,
    margin: [0, 20, 0 ,0]
  },
  detail: {
    margin: [20, 10, 0 ,0]
  }
}