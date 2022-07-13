package edu.yavirac.campaignbackend.campaign;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
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
    private boolean enable;

}