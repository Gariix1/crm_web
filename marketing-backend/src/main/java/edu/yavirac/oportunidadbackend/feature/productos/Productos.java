package edu.yavirac.oportunidadbackend.feature.productos;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("productos")
public class Productos{

    @Id
    @Column("producto_id")
    private long productoId;

    private String nombre;
    private String descripcion;
    private String marca;
    private String modelo;

    private Date created;
    private Date updated;
    private boolean enable;


}