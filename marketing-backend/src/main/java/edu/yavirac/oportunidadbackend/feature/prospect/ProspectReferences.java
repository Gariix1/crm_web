 package edu.yavirac.oportunidadbackend.feature.prospect;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("prospecto_referencias")
public class ProspectReferences {

    @Id
    @Column("prospecto_referencias_id")
    private long prospectoReferenciasId;
    @Column("prospecto_id")
    private Long prospectoId;
    @Column("referencia_id")
    private Long referenciaId;
    
}
 