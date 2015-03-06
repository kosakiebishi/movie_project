<?php

namespace moovi\MooviBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class ActorType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstname', 'text', array(
            	'label' => 'Imię'))
            ->add('lastname', 'text', array(
            	'label' => 'Nazwisko'))
            ->add('save', 'submit')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'moovi\MooviBundle\Entity\Actor'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'moovi_moovibundle_actor';
    }
}
