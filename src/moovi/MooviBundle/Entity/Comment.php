<?php

namespace moovi\MooviBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Comments
 *
 * @ORM\Table(name="comment")
 * @ORM\Entity
 */
class Comment
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text")
     */
    private $text;

    /**
     *
     * @ORM\ManyToOne(targetEntity="User", inversedBy="comments")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="Movie", inversedBy="comments")
     */
    private $movie;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime")
     */
    private $createdAt;



    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set text
     *
     * @param string $text
     * @return Comment
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Get text
     *
     * @return string 
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * Set createdAt
     *
     * @ORM\PrePersist
     *
     * @param \DateTime $createdAt
     * @return Comment
     */
    public function setCreatedAt()
    {
        $this->createdAt = new \DateTime();

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime 
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set user
     *
     * @param \moovi\MooviBundle\Entity\User $user
     * @return Comment
     */
    public function setUser(\moovi\MooviBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \moovi\MooviBundle\Entity\User 
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set movie
     *
     * @param \moovi\MooviBundle\Entity\Movie $movie
     * @return Comment
     */
    public function setMovie(\moovi\MooviBundle\Entity\Movie $movie = null)
    {
        $this->movie = $movie;

        return $this;
    }

    /**
     * Get movie
     *
     * @return \moovi\MooviBundle\Entity\Movie 
     */
    public function getMovie()
    {
        return $this->movie;
    }
}
