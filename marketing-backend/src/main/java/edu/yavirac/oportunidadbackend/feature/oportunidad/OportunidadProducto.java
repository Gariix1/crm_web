package edu.yavirac.oportunidadbackend.feature.oportunidad;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("oportunidades_productos")
public class OportunidadProducto {
    @Id
    @Column("op_id")
    private long opId;
    private Long oportunidadId;
    private Long productoId;
    

}
