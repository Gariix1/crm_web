package edu.yavirac.oportunidadbackend.feature.campaign;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("campanias")
public class Campaign{

    @Id
    @Column("campania_id")
    private int campaniaId;

    @Column("promocion_id")
    private int promocionId;

    @Column("medio_publicitar")
    private String medioPublicitar;

    @Column("fecha_inicio")
    private Date fechaInicio;

    @Column("fecha_final")
    private Date fechaFinal;

    private Date created;
    private Date updated;
    private Boolean enable;

    @Column("creado_por")
    private int creadoPor;

    @MappedCollection(idColumn = "campania_id")
    private Set<CampaignProspect> prospects = new HashSet<>();
  

}