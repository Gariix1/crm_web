package edu.yavirac.oportunidadbackend.feature.productos;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("producto_relacionado")
public class ProductosRelacionado {
    @Id
    private long id;
    private Long productoId;
    private Long relacionId;
    
}
