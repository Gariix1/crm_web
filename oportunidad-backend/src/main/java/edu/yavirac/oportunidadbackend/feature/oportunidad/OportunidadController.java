package edu.yavirac.oportunidadbackend.feature.oportunidad;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/oportunidad")
public class OportunidadController {

    @Autowired
    OportunidadService oportunidadService;

    @PostMapping("/save")
    public Oportunidad save(@RequestBody Oportunidad oportunidad){
        return oportunidadService.save(oportunidad);
    }

    @GetMapping("/{oportunidadId}")
    public Oportunidad findById(@PathVariable long oportunidadId) {
        return oportunidadService.findById(oportunidadId);
    }

    @PutMapping("/update")
    public Oportunidad update(@RequestBody Oportunidad oportunidad){
        return oportunidadService.save(oportunidad);
    }
    
    @DeleteMapping("/deleteById/{oportunidadId}")
    public void deleteById(@PathVariable long oportunidadId){
        oportunidadService.deleteById(oportunidadId);
    }

    @GetMapping("/all")
    public List<Oportunidad>findAll(){
        return oportunidadService.findAll();
    }
}

