package edu.yavirac.campaignbackend.campaign;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CampaignService {
    
    @Autowired
    CampaignRepository campaignRepository;

    //Crear 
    public Campaign save(Campaign campaign){
        return campaignRepository.save(campaign);
    }

    //Read
    public Campaign findById(long campaniaId){
        return campaignRepository.findById(campaniaId).orElse(new Campaign());
    }

    //actualizar = crear

    //delete
    public void deleteById(long campaniaId){
        campaignRepository.deleteById(campaniaId);
    }

    //registros de permiso en una sola a traves de una lista

    public List<Campaign>findAll(){
        return campaignRepository.findAll();
    }
}