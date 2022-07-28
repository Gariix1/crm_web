package edu.yavirac.oportunidadbackend.feature.oportunidad;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface OportunidadRepository extends CrudRepository<Oportunidad, Long>{

    List<Oportunidad> findAll();

    List<Oportunidad> findByDescripcionLikeIgnoreCase(String term);
}