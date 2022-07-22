package edu.yavirac.oportunidadbackend.feature.prospect;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.yavirac.oportunidadbackend.feature.person.Person;

@Service
public class ProspectService {
    

    @Autowired
    ProspectRepository prospectRepository;

    public Prospect save(Prospect prospect){

        return prospectRepository.save(prospect);
    }

    public Prospect findById(long id){

        return prospectRepository.findById(id).orElse(new Prospect());

    }

    public void deleteById(long id){

        prospectRepository.deleteById(id);
    }

    public List<Prospect> findAll(){
        return prospectRepository.findAll();
    }

    public List<Prospect> findByName(String term){
        return prospectRepository.findByNameLikeIgnoreCase(term);
    }
}
