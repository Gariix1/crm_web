package edu.yavirac.oportunidadbackend.feature.campaign;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("campanias_prospectos")

public class CampaignProspect {
    
    @Id
    private long id;
    @Column("campania_id")
    private Long campaignId;
    @Column("prospecto_id")
    private Long prospectId;
}
