package edu.yavirac.oportunidadbackend.feature.productos;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface ProductosRepository extends CrudRepository<Productos, Long>{

    List<Productos> findAll();
}