<?php

namespace moovi\MooviBundle\Repository;

use Doctrine\ORM\EntityRepository;

class MovieRepository extends EntityRepository {

    /**
     *
     * Get movies by lastes
     *
     * @param $limit integer
     * @return array
     */
    public function findByLastest($limit = 3) {
        $builder = $this->createQueryBuilder('m');

        $result = $builder->select('m')
            ->orderBy("m.id", "DESC")
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();

        return $result;
    }

    /**
     *
     * Get movies by most popular
     *
     * @param $limit integer
     * @return array
     */
    public function findByMostPopular($limit = 3) {
        $builder = $this->createQueryBuilder('m');

        $result = $builder->select('m, COUNT(o.id) as HIDDEN num')

            ->leftJoin('m.orders', 'o')
            ->groupBy('m.id')
            ->orderBy("num", "DESC")
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();

        return $result;

    }

    /**
     *
     * Get movies by most commented
     *
     * @param $limit integer
     * @return array
     */
    public function findByMostCommented($limit = 3) {
        $builder = $this->createQueryBuilder('m');

        $result = $builder->select('m, COUNT(c.id) as HIDDEN num')

            ->leftJoin('m.comments', 'c')
            ->groupBy('m.id')
            ->orderBy("num", "DESC")
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();

        return $result;

    }
}