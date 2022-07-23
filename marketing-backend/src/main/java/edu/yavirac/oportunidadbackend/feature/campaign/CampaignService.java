package edu.yavirac.oportunidadbackend.feature.campaign;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CampaignService {

    @Autowired
    CampaignRepository campaignRepository;

    //Create
    public Campaign save(Campaign campaign){
        return campaignRepository.save(campaign);
    }

    //Read
    public Campaign findById(long id){
        return campaignRepository.findById(id).orElse(new Campaign());
    }

    //Update = Create (PUT)

    //Delete
    public void deleteByID(long id){
        campaignRepository.deleteById(id);
    }

    public List<Campaign> findAll(){
        return campaignRepository.findAll();
    }

    public List<Campaign> findByMedioPublicitar(String term){
        return campaignRepository.findByMedioPublicitarLikeIgnoreCase(term);
    }

}