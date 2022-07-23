package edu.yavirac.oportunidadbackend.feature.campaign;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/campaign")
public class CampaignController {

    @Autowired
    CampaignService campaignService;
//Create
    @PostMapping("/save")
    public Campaign save(@RequestBody Campaign campaign) {
        return campaignService.save(campaign);
    }

    @GetMapping("/{id}")
    public Campaign findById(@PathVariable long id){
        return campaignService.findById(id);
    }

    @PutMapping("/update")
    public Campaign update(@RequestBody Campaign campaign){
        return campaignService.save(campaign);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteByID(@PathVariable long id){
        campaignService.deleteByID(id);
    }

    @GetMapping("/findAll")
    public List <Campaign> findAll(){
        return campaignService.findAll();
    }

    @GetMapping("/findByMedioPublicitar/{term}")
    public List<Campaign> findByMedioPublicitar(@PathVariable String term){
        return campaignService.findByMedioPublicitar(term+"%");
    }
    
}