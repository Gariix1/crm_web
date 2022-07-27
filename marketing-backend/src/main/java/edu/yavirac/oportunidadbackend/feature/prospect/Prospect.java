package edu.yavirac.oportunidadbackend.feature.prospect;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("prospectos")

public class Prospect {
    @Id
    @Column("prospecto_id")
    private long prospectoId;
    private String nombre;
    private String identificacion;
    private String origen;
    private Number telefono;
    private String direccion;
    private String correo;
    private Date created;
    private Date updated;
    private Boolean enable;
    @Column("person_id")
    private Long personId;

    @MappedCollection(idColumn = "prospecto_id")
    private Set<ProspectReferences> references= new HashSet<>();
 
}
