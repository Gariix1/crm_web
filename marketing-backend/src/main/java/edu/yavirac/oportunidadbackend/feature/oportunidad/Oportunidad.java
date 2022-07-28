package edu.yavirac.oportunidadbackend.feature.oportunidad;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("oportunidades")
public class Oportunidad{

    @Id
    @Column("oportunidad_id")
    private long oportunidadId;
    @Column("prospecto_id")
    private int prospectoId;
    private Number monto;
    @Column("etapa_id")
    private int etapaId;
    @Column("vendedor_id")
    private int vendedorId;
    @Column("campania_id")
    private int campaniaId;
    private Date created;
    private Date updated;
    private boolean enable;
    private String descripcion;

    @MappedCollection(idColumn = "oportunidad_id")
    private Set<OportunidadProducto>productos = new HashSet<>();

}