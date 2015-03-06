<?php

namespace moovi\MooviBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class MovieType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', 'text', array('label' => 'Tytuł filmu'))

            ->add('year', 'date', array('label' => 'Rok produkcji'))

            ->add('cover', 'text', array('label' => 'Link do okladki'))

            ->add('genres', 'entity', array(
                'class' => 'mooviMooviBundle:Genre',
                'property' => 'name',
                'label' => 'Gatunek',
                'expanded' => true ,
                'multiple' => true ))

            ->add('actors', 'entity', array(
                'class' => 'mooviMooviBundle:Actor',
                'property' => 'fullName',
                'label' => 'Aktorzy',
                'expanded' => true ,
                'multiple' => true ))
            
            ->add('save', 'submit')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'moovi\MooviBundle\Entity\Movie'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'moovi_moovibundle_movie';
    }
}
